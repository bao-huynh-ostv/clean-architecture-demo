import { IUseCase } from '../base/usecase.interface';
import { UseCaseAdapter } from '../base/adapter.abstract';

export class UserAdapter extends UseCaseAdapter {
  constructor(useCase: IUseCase) {
    super(useCase);
  }

  serialize(): any {
    return this.useCase.execute();
  }
}
