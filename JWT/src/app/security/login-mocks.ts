import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
    {
        userName: "nopatel",
        bearerToken: 'werwtrtjeujsd87dsd',
        isAuthenticated: true,
        canAccessProducts: true,
        canAddProduct: true,
        canSaveProduct: true,
        canAccessCatagories: true,
        canAddCatagory: false
    },
    {
        userName: "swaraj",
        bearerToken: 'kmdhftrtm;d88sfd7sdfsd66',
        isAuthenticated: true,
        canAccessProducts: true,
        canAddProduct: false,
        canSaveProduct: false,
        canAccessCatagories: true,
        canAddCatagory: true
    },
    {
        userName: "swati",
        bearerToken: 'kmdhftrtmerd88sfd7sdfsd66',
        isAuthenticated: true,
        canAccessProducts: false,
        canAddProduct: false,
        canSaveProduct: false,
        canAccessCatagories: true,
        canAddCatagory: true
    }
]