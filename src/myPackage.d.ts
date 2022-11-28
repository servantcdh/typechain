interface Config {
    url: string;
}

declare module "myPackage" {
    /** 이렇게 함수 설명을 적으면 됩니다 */
    function init(config: Config): boolean;
    function exit(code: number): boolean;
}
