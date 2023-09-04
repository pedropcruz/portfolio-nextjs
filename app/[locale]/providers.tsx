"use client";
import { ThemeProvider } from 'next-themes'
import {NextIntlClientProvider} from 'next-intl';
import { ReactNode, useEffect, useState } from "react";
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'pt'}]
}


const Providers = ({ children, params: { locale } }: { children: ReactNode, params: {locale: string} }) => {
	const [mounted, setMounted] = useState(false);
	
	let messages;

  try {
    messages = require(`../../dictionaries/${locale}.json`)
  } catch (error) {
    notFound();
  }


  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme='light' enableSystem>
			<NextIntlClientProvider locale={locale} messages={messages}>
      	{children}
			</NextIntlClientProvider>
    </ThemeProvider>
  );
};

export default Providers;