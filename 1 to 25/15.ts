//we have to form an object with below key but key should be in uppercase
type Events = "log_in" | "log_out" | "sign_up";

type ObjectOfKey = Record<Uppercase<Events>, string>;
