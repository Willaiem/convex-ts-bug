import { action, query } from "./_generated/server";
import { internal } from "./_generated/api";

export const getTasks = query({
    args: {},
    handler: async (ctx) => {
        const tasks = await ctx.db.query('tasks').collect()

        return tasks
    }
})


export const invokeAction = action({
    args: {},
    handler: async (ctx) => {
        const tasks = await ctx.runQuery(internal.actions.getTasks)

        const texts = tasks.map(task => task.text)

        // do something else...

        return texts
    }
})
