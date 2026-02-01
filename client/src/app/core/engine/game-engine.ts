import { Direction, GameConfig, GameState, Point } from './types';

export class GameEngine {
    private readonly config: GameConfig;
    private state!: GameState;
    private pendingDirection: Direction | null = null;

    constructor(config: GameConfig){
        this.config = {...config};
        this.reset();
    }

    reset(): void {
        const startX = Math.floor(this.config.width/2);
        const startY = Math.floor(this.config.height / 2);
        const snake: Point[] = [];

        for(let i = 0; i < this.config.initialLength; i++) {
            snake.push({x: startX - i, y: startY});
        }

        this.state = {
            alive: true,
            direction: 'RIGHT',
            snake,
            tick: 0,
            food: {x: 2, y: 2},
        }
    }

    getState(): GameState {
        return {
            ...this.state,
            food: {...this.state.food},
            snake: this.state.snake.map((p) => ({...p})),
        }
    }

    setDirection(dir: Direction): void {
        this.pendingDirection = dir;
    }

    tick(): void {
        this.state.tick++;
        //TODO: Implement Tick Based movement
    }


}