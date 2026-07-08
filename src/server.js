import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

import countriesRouter from './routers/counties.js';
import categoriesRouter from './routers/categories.js';
import promotionsRouter from './routers/promotions.js';
import companiesRouter from './routers/companies.js';
import summaryCategoriesRouter from './routers/summaryCategories.js';
import summaryCountriesRouter from './routers/summaryCountries.js';
import summarySalesRouter from './routers/summarySales.js';
import summaryStatsRouter from './routers/summaryStats.js';

const PORT = Number(getEnvVar('PORT', 7777));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(categoriesRouter);
  app.use(companiesRouter);
  app.use(countriesRouter);
  app.use(promotionsRouter);
  app.use(summaryCategoriesRouter);
  app.use(summaryCountriesRouter);
  app.use(summarySalesRouter);
  app.use(summaryStatsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
