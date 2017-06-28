/* Service which adds number to array to gives array back */
import { Injectable } from '@angular/core';

@Injectable()
export class MathServiceService {
  private numberList: number[] = [];

  /** Add number in the array List. */
  addNumberToarray(newNumber: number) {
    this.numberList.unshift(newNumber);
    console.log(this.numberList);
  }

  /**Get the number list from the array. */
  getNumberArray(): number[] {
    return this.numberList;
  }

}
