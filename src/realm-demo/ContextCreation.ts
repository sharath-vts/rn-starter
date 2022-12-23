import { Task } from "./TaskSchema";
import {createRealmContext} from '@realm/react'

const config = {
    schema: [Task.schema]
}

export default createRealmContext(config)