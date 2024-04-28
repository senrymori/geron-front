import { TokenModel } from "./models/TokenModel";
import { StorageService } from "./StorageService";

export const tokenService = new StorageService<TokenModel>("TOKEN_KEY");
