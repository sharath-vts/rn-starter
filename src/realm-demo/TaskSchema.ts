import { createRealmContext } from "@realm/react";
import React from "react";

export class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: 'string',
      isComplete: { type: 'bool', default: false },
      createdAt: 'date'
    }
  }

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date()
    }
  }


}
// const config = {
//   schema: [Task]
// }
// export default createRealmContext(config)
// export default new Realm({ schema: [Task], schemaVersion: 1 })


