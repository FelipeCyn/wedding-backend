import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class RegisterDto {
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	name?: string;

	@IsString()
	@IsNotEmpty()
	@IsOptional()
	phone?: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}

export default RegisterDto;
