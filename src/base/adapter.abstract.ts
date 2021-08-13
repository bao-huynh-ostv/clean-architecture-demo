import { IUseCase } from './usecase.interface';

export abstract class UseCaseAdapter {
  protected useCase: IUseCase;

  protected constructor(useCase: IUseCase) {
    this.useCase = useCase;
  }

  abstract serialize(): any;
}
