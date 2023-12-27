const fruits = ["apple", "banana", "orange"] as const

//want type as apple or banana
type AppleOrBanana = typeof fruits[0 | 1];

//will get the all the types  from the array 
type Fruit = typeof fruits[number]