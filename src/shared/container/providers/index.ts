import { container } from 'tsyringe';

import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';

import EtherealMailProvider from './MailProvider/implementatons/EtherealMailProvider';
import IMailProvider from './MailProvider/models/IMailProvider';

container.registerSingleton<IStorageProvider>('StorageProvider', DiskStorageProvider);

container.registerInstance<IMailProvider>('MailProvider', new EtherealMailProvider());