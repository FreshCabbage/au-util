// 文件名: browser-ua-validator.js

/**
 * 验证浏览器UA字符串
 * @param {string} userAgent - 浏览器UA字符串
 * @returns {boolean} - 如果是有效的浏览器UA字符串则返回true,否则返回false
 */
function isValidBrowserUA(userAgent) {
    if (typeof userAgent !== 'string') {
      return false;
    }
  
    // 常见浏览器UA字符串的正则表达式模式
    const browserUAPatterns = [
      /^Mozilla\/\d\.\d \((?:Windows|Macintosh|Linux|Android|like Mac OS X); .*\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\) (?:Chrome|Safari|Firefox)\/\d+\.\d+(?:\.\d+)?(?: Mobile\/\w+)?(?: Safari\/\d+\.\d+(?:\.\d+)?)?$/i,
      /^Mozilla\/\d\.\d \((?:iPhone|iPad); .*\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\)(?: Mobile\/\w+)? (?:Version\/\d+\.\d+(?:\.\d+)?)?(?: Safari\/\d+\.\d+(?:\.\d+)?)?$/i,
      /^Mozilla\/\d\.\d \(X11; Linux .*\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\) Chrome\/\d+\.\d+(?:\.\d+)? (?:Mobile )?Safari\/\d+\.\d+(?:\.\d+)?$/i,
      /^Mozilla\/\d\.\d \(Windows NT \d+\.\d+; Win64; x64;?\) AppleWebKit\/\d+\.\d+ \(KHTML, like Gecko\) Chrome\/\d+\.\d+(?:\.\d+)? Safari\/\d+\.\d+(?:\.\d+)? Edg\/\d+\.\d+(?:\.\d+)?$/i
    ];
  
    // 使用正则表达式验证UA字符串
    return browserUAPatterns.some(pattern => pattern.test(userAgent));
  }
  
  module.exports = isValidBrowserUA;