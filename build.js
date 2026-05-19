const fs = require('fs-extra');
const path = require('path');
const Terser = require('terser');
const CleanCSS = require('clean-css');

const inputDir = '.';
const outputDir = 'dist';

async function build() {
    console.log('🚀 开始构建项目...');
    
    // 清理输出目录
    await fs.remove(outputDir);
    await fs.ensureDir(outputDir);
    
    // 处理 JavaScript 文件
    console.log('🔧 压缩混淆 JavaScript...');
    const jsFiles = ['app.js', 'config.js'];
    
    for (const file of jsFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.js', '.min.js'));
        
        if (await fs.pathExists(inputPath)) {
            const code = await fs.readFile(inputPath, 'utf8');
            const result = await Terser.minify(code, {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log', 'console.debug', 'console.warn'],
                    dead_code: true,
                    unused: true,
                    booleans_as_integers: false,
                    collapse_vars: false,
                    reduce_vars: false
                },
                mangle: {
                    toplevel: false,
                    eval: false,
                    properties: false
                },
                format: {
                    comments: false,
                    beautify: false,
                    indent_level: 0
                }
            });
            
            if (result.error) {
                console.error(`❌ 压缩 ${file} 失败:`, result.error);
                process.exit(1);
            }
            
            await fs.writeFile(outputPath, result.code);
            console.log(`✅ ${file} -> ${path.basename(outputPath)}`);
        }
    }
    
    // 处理 CSS 文件
    console.log('🔧 压缩 CSS...');
    const cssFiles = ['styles.css'];
    
    for (const file of cssFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file.replace('.css', '.min.css'));
        
        if (await fs.pathExists(inputPath)) {
            const code = await fs.readFile(inputPath, 'utf8');
            const result = new CleanCSS({
                level: {
                    1: {
                        specialComments: 0,
                        removeEmpty: true
                    },
                    2: {
                        mergeMedia: true,
                        restructureRules: true
                    }
                }
            }).minify(code);
            
            if (result.errors.length > 0) {
                console.error(`❌ 压缩 ${file} 失败:`, result.errors);
                process.exit(1);
            }
            
            await fs.writeFile(outputPath, result.styles);
            console.log(`✅ ${file} -> ${path.basename(outputPath)}`);
        }
    }
    
    // 处理 HTML 文件
    console.log('🔧 处理 HTML...');
    const htmlFiles = ['index.html', 'detail.html'];
    
    for (const file of htmlFiles) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
        
        if (await fs.pathExists(inputPath)) {
            let content = await fs.readFile(inputPath, 'utf8');
            
            // 替换 JS 和 CSS 引用为压缩版本
            content = content
                .replace(/app\.js/g, 'app.min.js')
                .replace(/config\.js/g, 'config.min.js')
                .replace(/styles\.css/g, 'styles.min.css');
            
            // 移除 HTML 注释
            content = content.replace(/<!--[\s\S]*?-->/g, '');
            
            // 压缩 HTML（移除多余空白）
            content = content
                .replace(/[\r\n]+/g, '\n')
                .replace(/^\s+|\s+$/gm, '')
                .replace(/\s{2,}/g, ' ');
            
            await fs.writeFile(outputPath, content);
            console.log(`✅ ${file} -> ${path.basename(outputPath)}`);
        }
    }
    
    console.log('\n🎉 构建完成！输出目录: ./dist');
    console.log('📁 输出文件:');
    console.log('  - index.html');
    console.log('  - detail.html');
    console.log('  - app.min.js (已混淆)');
    console.log('  - config.min.js (已混淆)');
    console.log('  - styles.min.css');
}

build().catch(err => {
    console.error('❌ 构建失败:', err);
    process.exit(1);
});