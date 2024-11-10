import axios from "axios";
import { ref } from "vue";

interface MdConfig {
    all_url: string;
    method: string;
    dom: string;
}

export const useMarkdown = async (Config: MdConfig) => {
    const html = ref('')
    if (!axios) {
        throw new Error('axios未安装');
    } else {
        try {
            const response = await axios({
                url: Config.all_url,
                method: Config.method,
            });
            html.value = convertMarkdownToHtml(response.data);
        } catch (error) {
            console.log("失败,错误" + `${error}`);
        }
    }
    return { html }
};

export const convertMarkdownToHtml = (markdown: string) => {
    // 转换标题
    markdown = markdown.replace(/^#{1,6}\s+(.*)/g, (match, content) => `<h${match.length - 1}>${content}</h${match.length - 1}>`);
    // 转换无序列表
    markdown = markdown.replace(/^-\s+(.*)/g, '<ul><li>$1</li></ul>');
    // 转换有序列表
    markdown = markdown.replace(/^\d+\.\s+(.*)/g, '<ol><li>$1</li></ol>');
    // 转换链接
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    // 转换粗体和斜体
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // 粗体
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>'); // 斜体
    // 转换段落
    markdown = markdown.replace(/\n\n/g, '</p><p>');
    markdown = markdown.replace(/(.*)/g, '<p>$1</p>');
    // 移除多余的<p>标签
    markdown = markdown.replace(/<\/p><p>/g, '\n');
    markdown = markdown.replace(/<\/p><p>\n/g, '\n');
    markdown = markdown.replace(/\n<\/p>/g, '</p>');
    markdown = markdown.replace(/<p>\n/g, '<p>');
    markdown = markdown.replace(/\n<p>/g, '<p>');
    // 移除多余的<ul>和<ol>标签
    markdown = markdown.replace(/<\/ul>\n<ul>/g, '');
    markdown = markdown.replace(/<\/ol>\n<ol>/g, '');
    // 移除多余的<li>标签
    markdown = markdown.replace(/<\/li>\n<li>/g, '\n');
    markdown = markdown.replace(/<li>\n/g, '<li>');
    markdown = markdown.replace(/\n<\/li>/g, '</li>');
    // 移除多余的<strong>和<em>标签
    markdown = markdown.replace(/<strong>\s*<\/strong>/g, '');
    markdown = markdown.replace(/<em>\s*<\/em>/g, '');
    // 移除多余的<p>标签
    markdown = markdown.replace(/<p>\s*<\/p>/g, '');
    return markdown;
}