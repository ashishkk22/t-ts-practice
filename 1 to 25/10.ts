export const programModalMap = {
    GROUP : "group",
    ONE_TO_ONE: "1on1"
};

/** required result
 * type GroupProgram = "group"
*/

type GroupProgram = typeof programModalMap["GROUP"] // string

//but with the as const it will add readonly.
export const pModalMap = {
  GROUP: "Group",
  ONE_TO_ONE: "1on1",
} as const;

//or can add Object.freeze but i will freeze it on the first level only

type GProgram = typeof pModalMap["GROUP"]

type ProgramModalMapType = typeof pModalMap