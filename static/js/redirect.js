/* eslint-disable */
// 给页面重定向，因为在云上有些访问是没有带/的相对路径就访问不了，所以需要重定向
(function() {
    // 获取当前路径、查询参数和哈希值
    const pathname = window.location.pathname; // 路径部分，如 "/big"
    const search = window.location.search;     // 查询参数，如 "?id=123"
    const hash = window.location.hash;         // 哈希值，如 "#section"

    // 定义需要排除的文件扩展名正则表达式
    const fileExtensionRegex = /\.[^/]+$/;

    // 满足以下条件时触发重定向：
    // 1. 当前路径不以斜杠结尾
    // 2. 不包含文件扩展名（如 .html/.js/.css）
    // 3. 不是根路径 "/"
    if (!pathname.endsWith('/') && 
        !fileExtensionRegex.test(pathname) && 
        pathname !== '/') 
    {
        // 构建新URL：原路径 + 斜杠 + 查询参数 + 哈希
        const newUrl = `${pathname}/${search}${hash}`;
        
        // 使用 replace 方法重定向（不会产生历史记录）
        window.location.replace(newUrl);
    }
})();