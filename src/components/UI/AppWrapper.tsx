
import I18nProvider from './LanguageProvider';
import HeaderComponent from './Header';
import FooterComponent from './Footer';

import FloatingActionButton from './FloatingActionButton';
export default function AppWrapper({ children }:any) {
  return (
    <I18nProvider>
      <HeaderComponent />
      <FloatingActionButton/>
      <main>{children}</main>
      <FooterComponent />
    </I18nProvider>
  );
}