import {TestBed} from "@angular/core/testing";
import {UserComponent} from "./user.component";
import {AppComponent} from "../app.component";
import {UserService} from "./shared/user.service";

describe('Unit Testing UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, AppComponent]
    });
  });

  it('isLoggedIn should return true', () => {
    let fixture = TestBed.createComponent(UserComponent);
    fixture.autoDetectChanges(true);
    let app = fixture.debugElement.componentInstance;
    expect(app.isLoggedIn).toEqual(true);
  });

  it('should test that the userComponent exists', () => {
    let fixture = TestBed.createComponent(UserComponent);
    fixture.autoDetectChanges(true);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from userSerice', () => {
    let fixture = TestBed.createComponent(UserComponent);
    fixture.autoDetectChanges(true);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    expect(app.user.name).toEqual(userService.user.name);
  });

});
