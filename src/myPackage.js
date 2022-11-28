//  @ts-check
/**
 * 프로젝트를 초기화합니다.
 * @param {object} config 
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
    return true;
};

/**
 * exit the program
 * @param {number} code 
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}