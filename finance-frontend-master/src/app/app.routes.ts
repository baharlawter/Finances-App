import { Routes } from '@angular/router';
import { Blogs } from './components/resources/blogs/blogs';
import { Calculator } from './components/tools/calculator/calculator';
import { FinancialGuides } from './components/resources/financial-guides/financial-guides';
import { MoneyTips } from './components/resources/money-tips/money-tips';
import { BudgetPlanner } from './components/tools/budget-planner/budget-planner';
import { InvestmentTracker } from './components/tools/investment-tracker/investment-tracker';

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  { path: 'blogs', component: Blogs },
  { path: 'calculator', component: Calculator },
  { path: 'guides', component: FinancialGuides },
  { path: 'tips', component: MoneyTips },
  { path: 'budget', component: BudgetPlanner },
  { path: 'investments', component: InvestmentTracker },
];
