import {TestBed} from "@angular/core/testing";
import {UserComponent} from "./user.component";
import {AppComponent} from "../app.component";

describe('Unit Testing UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent, AppComponent]
    });
  });

  it('isLoggedIn should return true', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.isLoggedIn).toEqual(true);
  });

  it('should test that the userComponent exists', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
