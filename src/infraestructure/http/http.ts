export default interface Http {
	on(url: string, callback: Function): void;
	listen (port: number): void;
}