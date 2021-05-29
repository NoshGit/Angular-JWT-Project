import { AppUserClaim } from "./app-user-claim";

export class AppUserAuth {
    userName: string = "";
    firstName: string = "";
    lastName: string = "";
    bearerToken: string = "";
    isAuthenticated: boolean = false;
    claims: AppUserClaim[] = [];
}