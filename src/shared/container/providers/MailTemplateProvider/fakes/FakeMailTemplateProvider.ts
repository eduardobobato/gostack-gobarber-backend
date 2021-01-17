import IParseTemplateDTO from '../dtos/IParseTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({}: IParseTemplateDTO): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvider;
