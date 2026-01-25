export interface Point {
    x: number;
    y: number;
}

export type Direction = 'UP' | 'DOWN' | 'RIGHT' | 'LEFT';

export interface GameState {
    snake: Point[];
    food: Point;
    direction: Direction;
    alive: boolean;
    tick: number;
}

export interface GameConfig {
    width: number;
    height: number;
    initialLength: number;
}