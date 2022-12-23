import { Realm } from "@realm/react";
import TaskContext from './ContextCreation'
import { Task } from "./TaskSchema";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import React, { useState } from "react";


const TaskHome = () => {
    const [task, setTask] = useState('')
    const [tasks,setTasks] = useState([])

    const { useRealm, useQuery } = TaskContext
    const realm = useRealm()

    const fetchTasks = () => {
        // var tasks:[Task] = []
        const tasks = realm.objects('Task')
        // setTasks(tasks)
        console.log("Tasks count: ",tasks.length, tasks);

    }
    const addTask = React.useCallback((description) => {
        if (!description) {
            return
        }
        realm.write(() => {
            realm.create('Task', Task.generate(description))
        })
    }, [realm])

    return (
        <View>
            <TextInput
                value={task}
                placeholder='Enter new task'
                onChangeText={setTask}
            />

            <Button
                title="Add task"
                onPress={() => addTask(task)}
            />

            <Button
                title="Fetch tasks"
                onPress={() => fetchTasks()}
            />

            {/* <FlatList 
                data={tasks}
                keyExtractor = {(item, index) => index.toString()}
                renderItem = {({item}) => {
                    return (
                        <View>
                            <Text>{item.description}</Text>
                        </View>
                    )

                }}
            /> */}

        </View>
    )
}

export default TaskHome