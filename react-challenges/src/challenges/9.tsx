const BACKEND_TO_FRONTEND_STATUS_MAP = {
    0: "pending",
    1: "success",
    2: "error"
} as const;

//here we want backend status as 0 1 or 2 and frontend status as pending, success or error

type BackendStatus = keyof typeof BACKEND_TO_FRONTEND_STATUS_MAP;
type FrontendStatus = typeof BACKEND_TO_FRONTEND_STATUS_MAP[BackendStatus];
