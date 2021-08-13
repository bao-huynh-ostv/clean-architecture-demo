export interface IUseCase {
  getInstance(): IUseCase;

  getName(): string;

  execute(): any;
}
