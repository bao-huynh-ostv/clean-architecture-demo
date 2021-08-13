import { IUseCase } from '../base/usecase.interface';

export class LocatorCache {
  private static locatorCache: Record<string, IUseCase> = {};

  private static registerUseCase(useCase: IUseCase): void {
    LocatorCache.locatorCache[useCase.getName()] = useCase.getInstance();
  }

  getUseCase(useCase: IUseCase): IUseCase {
    if (!LocatorCache.locatorCache[useCase.getName()]) {
      LocatorCache.registerUseCase(useCase);
    }
    return LocatorCache.locatorCache[useCase.getName()];
  }
}
