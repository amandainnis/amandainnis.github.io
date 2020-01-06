// import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import { Subject } from 'rxjs';
import React from "react";
import { DARK } from "./dark";
import { LIGHT } from "./light";
// import { APPDARK } from '../styles/theme/app-dark';
// import { APPLIGHT } from '../styles/theme/app-light';
// import { Theme } from './theme/theme';

// this is an extension of
// https://www.freecodecamp.org/news/how-to-create-themes-for-your-angular-7-apps-using-css-variables-69251690e9c5/
// export interface Theme {
//   name: string;
//   properties: any;
// }

// @Injectable({
//   providedIn: 'root',
// })
export class ThemeService {
  light = LIGHT;
  dark = DARK;
  appLight = APPLIGHT;
  appDark = APPDARK;
  // active = this.light;
  active;
  availableThemes = [this.light, this.dark];
  defaultTheme = "light";
  currentTheme;
  //   theme$ = new Subject<string>();

  pieDark = ["teal", "pink", "yellow", "aquamarine"];

  getAvailableThemes() {
    return this.availableThemes;
  }

  getActiveTheme() {
    const temp =
      localStorage.getItem("theme") === null ||
      localStorage.getItem("theme") === undefined
        ? this.defaultTheme
        : localStorage.getItem("theme");
    if (temp === "light") {
      this.active = this.light;
      this.setTheme("light");
    } else {
      this.active = this.dark;
      this.setTheme("dark");
    }
    console.log(this.active);
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === this.dark.name;
  }

  setDarkTheme(): void {
    this.setTheme("dark");
  }

  setLightTheme(): void {
    this.setTheme("light");
  }
  generateVars(theme) {
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property]
      );
    });
  }
  generateTheme(theme) {
    this.active = theme;
    console.log("i am active theme", theme);
    if (theme.name === "light") {
      Object.assign(this.light.properties, this.appLight.properties);
      this.generateVars(this.active);
    } else {
      Object.assign(this.dark.properties, this.appDark.properties);
      this.generateVars(this.active);
    }
  }
  setTheme(theme) {
    // this.theme$.next(theme);
    localStorage.setItem("theme", theme);
    this.document.querySelector("html").className = "theme-" + theme;
    if (theme === "light") {
      this.generateTheme(this.light);
    } else {
      this.generateTheme(this.dark);
    }
  }

  //   constructor(@Inject(DOCUMENT) private document: any) {

  //   }
}
