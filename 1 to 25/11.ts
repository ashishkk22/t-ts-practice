export const programModalMap = {
  GROUP: "group",
  ONE_TO_ONE: "1on1",
  ANNOUNCEMENT: "announcement",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1"
} as const;

/** required result
 * type GroupProgram = "group" | "1on1" | "announcement" | "selfDirected" | "planned1on1" 
 */

//will get the all the keys except GROUP
type GroupProgramWithExclude = typeof programModalMap[Exclude<keyof typeof programModalMap, "GROUP">]


//will get the all the keys
type GroupProgram = typeof programModalMap[keyof typeof programModalMap]
