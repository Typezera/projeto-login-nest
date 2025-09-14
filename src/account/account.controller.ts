import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from 'src/entities/account.entity';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getUsers(): Promise<Account[]> {
    return this.accountService.getAccounts();
  }

  @Post()
  create(@Body() body: Partial<Account>) {
    return this.accountService.createAccount(body);
  }
}
