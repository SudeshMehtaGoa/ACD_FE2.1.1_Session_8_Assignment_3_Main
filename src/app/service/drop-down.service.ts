/* Service which provides values from dropdown commbobox */
import { Injectable } from '@angular/core';

@Injectable()
export class DropDownService {

  private dropDownList: string[] = ["Mr", "Mrs"];

  /**Get the drop down list from the array. */
  getdropDownList(): string[] {
    return this.dropDownList;
  }

}
