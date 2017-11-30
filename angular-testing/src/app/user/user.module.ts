import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import {UserService} from "./shared/user.service";
import {UserComponent} from "./user.component";

@NgModule({
    declarations: [AppComponent, UserComponent],
    imports: [UserModule],
    providers: [UserService]
  }
)
export class UserModule {
}
