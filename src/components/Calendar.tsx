import { type } from "os";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { CellpropType, CellType } from "../types/CellType";
import Cell from "./Cell";
import NavBar from "./NavBar";

enum MonthEnum {
  "Январь" = 0,
  "Февраль" = 1,
  "Март" = 2,
  "Аперль" = 3,
  "Май" = 4,
  "Июнь" = 5,
  "Июль" = 6,
  "Август" = 7,
  "Сентябрь" = 8,
  "Октябрь" = 9,
  "Ноябрь" = 10,
  "Декабрь" = 11,
}

enum DaysEnum {
  "Воскресенье" = 0,
  "Понедельник" = 1,
  "Вторник" = 2,
  "Среда" = 3,
  "Четверг" = 4,
  "Пятница" = 5,
  "Суббота" = 6,
}

interface DateObj {
  date: number;
  month: number;
  year: number;
}

export default function Calendar() {
  const select = useAppSelector((state) => state.CellsState.plans);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [monthAndYear, setMonthNYear] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  let weeks = 5;
  let arr = getArrayOfMonth();

  interface checkInRes {
    isin: boolean;
    value: number;
    type : CellType;
  }

  function checkIn(a: any, arr: CellpropType[]): checkInRes {
    for (let i = 0; i < arr.length; i++) {
      // console.log(a, "  ", arr[i].data);
      if (
        arr[i].data.date === a.date &&
        arr[i].data.month === a.month &&
        arr[i].data.year === a.year
      )
        return { isin: true, value: arr[i].value, type : arr[i].type};
    }
    return { isin: false, value: 0, type : CellType.notinplan };
  }

  function nextMonth() {
    if (monthAndYear.month >= 11) {
      setMonthNYear({ month: 0, year: monthAndYear.year + 1 });
    } else {
      setMonthNYear({ ...monthAndYear, month: monthAndYear.month + 1 });
    }
  }

  function prevMonth() {
    if (monthAndYear.month <= 0) {
      setMonthNYear({ month: 11, year: monthAndYear.year - 1 });
    } else {
      setMonthNYear({ ...monthAndYear, month: monthAndYear.month - 1 });
    }
  }

  function getArrayOfMonth() {
    let ramki = getSixNumbers(monthAndYear.year, monthAndYear.month);
    let counter = 0;
    let prevM, nextM;
    if (monthAndYear.month === 0) {
      prevM = 11;
      nextM = 1;
    } else if (monthAndYear.month === 11) {
      prevM = 10;
      nextM = 0;
    } else {
      prevM = monthAndYear.month - 1;
      nextM = monthAndYear.month + 1;
    }
    let arrStr = intervalByTwoNums(
      ramki[0],
      ramki[1],
      prevM,
      prevM === 11 ? monthAndYear.year - 1 : monthAndYear.year
    )
      .concat(
        intervalByTwoNums(
          ramki[2],
          ramki[3],
          monthAndYear.month,
          monthAndYear.year
        )
      )
      .concat(
        intervalByTwoNums(
          ramki[4],
          ramki[5],
          nextM,
          nextM === 0 ? monthAndYear.year + 1 : monthAndYear.year
        )
      );
    weeks = arrStr.length / 7;

    let arr = new Array(arrStr.length / 7);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(7);
    }

    for (let i = 0; i < arrStr.length / 7; i++) {
      for (let j = 0; j < 7; j++) {
        arr[i][j] = arrStr[counter];
        counter++;
      }
    }
    // console.log(arr);
    return arr;
  }

  function intervalByTwoNums(
    start: number,
    end: number,
    m: number,
    y: number
  ): DateObj[] {
    let array: DateObj[] = new Array(end - start + 1);
    if (end === 0 && start === 0) {
      return [];
    }
    for (let index = 0; index < array.length; index++) {
      array[index] = { date: start + index, month: m, year: y };
    }
    return array;
  }

  function getSixNumbers(y: number, m: number) {
    let res = new Array<number>(6);
    let startDayOfWeekCurrMonth = new Date(y, m, 1).getDay();
    let endDateOfPrevMonth = new Date(y, m, 0).getDate();
    let endDayOfWeekPrevMonth = new Date(y, m, 0).getDay();
    if (startDayOfWeekCurrMonth === 1) {
      res[0] = 0;
      res[1] = 0;
    } else if (startDayOfWeekCurrMonth === 0) {
      res[0] = endDateOfPrevMonth - 5;
      res[1] = endDateOfPrevMonth;
    } else {
      res[0] = endDateOfPrevMonth - endDayOfWeekPrevMonth + 1;
      res[1] = endDateOfPrevMonth;
    }
    res[2] = 1;
    res[3] = new Date(y, m + 1, 0).getDate();
    let endDayOfWeekCurrMonth = new Date(y, m + 1, 0).getDay();

    if (endDayOfWeekCurrMonth === 0) {
      res[4] = 0;
      res[5] = 0;
    } else {
      res[4] = 1;
      res[5] = 7 - endDayOfWeekCurrMonth;
    }

    return res;
  }

  return (
    <>
      <NavBar />
      Выбрать план накопления
      <br />
      {select.map((pl, i) => {
        return (
          <button onClick={() => setSelectedPlan(i)} key={i}>
            {pl.planName}
          </button>
        );
      })}
      <div className="calendar">
        <div className="controllpanel">
          <button onClick={() => prevMonth()}> предыдущий </button>
          {MonthEnum[monthAndYear.month]}, {monthAndYear.year}
          <button onClick={() => nextMonth()}> следующий </button>
        </div>

        <div className="headline">
          {[...Array(6)].map((_, row) => {
            return (
              <div className="dayOfWeek" key={row}>
                {DaysEnum[row + 1]}
              </div>
            );
          })}
          <div className="dayOfWeek">Воскресенье</div>
        </div>

        {[...Array(weeks)].map((_, row) => {
          return (
            <div className="datesline" key={row}>
              {[...Array(7)].map((_, col) => {
                let res = checkIn(arr[row][col], select[selectedPlan].cells);
                return (
                  <div key={col}>
                    <Cell
                      planIndex={selectedPlan}
                      type = {res.type}
                      done={res.isin}
                      value={res.value}
                      data={arr[row][col]}
                      fullTime={0}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
