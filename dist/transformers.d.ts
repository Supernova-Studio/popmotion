import { HSLA } from 'style-value-types';
import { Easing } from './easing';
export declare const appendUnit: (unit: string) => (v: number) => string;
export declare const applyOffset: (from: number, to?: number) => (v: number) => number;
export declare const blendColor: (from: string | HSLA | {
    red: number;
    green: number;
    blue: number;
    alpha?: number;
}, to: string | HSLA | {
    red: number;
    green: number;
    blue: number;
    alpha?: number;
}) => (v: number) => any;
export declare const clamp: (min: number, max: number) => (v: number) => number;
export declare const pipe: (...transformers: Function[]) => Function;
export declare type Check = (v: any) => boolean;
export declare type Apply = (v: any) => any;
export declare const conditional: (check: Check, apply: Apply) => (v: any) => any;
export declare const interpolate: (input: number[], output: number[], rangeEasing: Easing[]) => (v: number) => number;
export declare const generateStaticSpring: (alterDisplacement?: Function) => (constant: number, origin: number) => (v: number) => number;
export declare const linearSpring: (constant: number, origin: number) => (v: number) => number;
export declare const nonlinearSpring: (constant: number, origin: number) => (v: number) => number;
export declare const wrap: (min: number, max: number) => (v: number) => number;
export declare const smooth: (strength?: number) => (v: number) => number;
export declare const snap: (points: number | number[]) => (v: number) => number;
export declare const steps: (st: number, min?: number, max?: number) => (v: number) => number;
export declare const transformMap: (childTransformers: {
    [key: string]: Function;
}) => (v: any) => {
    [key: string]: any;
};
