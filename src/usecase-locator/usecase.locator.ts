import { LocatorCache } from './cache.locator';
import { IUseCase } from '../base/usecase.interface';

export class UseCaseLocator {
  private static instance: UseCaseLocator;
  private locatorCache: LocatorCache = new LocatorCache();

  static getInstance() {
    if (!UseCaseLocator.instance) {
      UseCaseLocator.instance = new UseCaseLocator();
    }

    return UseCaseLocator.instance;
  }

  getUseCase(useCase: IUseCase): IUseCase {
    return this.locatorCache.getUseCase(useCase);
  }
}
