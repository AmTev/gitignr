# gitignr

A lightweight command-line tool to quickly generate `.gitignore` files for your projects using templates from GitHub's official [gitignore repository](https://github.com/github/gitignore).

## Features

- Fast and simple - generate `.gitignore` files with a single command
- 296+ pre-configured templates for various languages and frameworks
- Comprehensive error handling and input validation
- Secure - protects against path traversal attacks
- Automatic file creation in current directory

## Installation

### Global Installation (Recommended)

```bash
npm install -g gitignr
```

### Local Installation

```bash
npm install gitignr
```

## Usage

### Basic Command

```bash
gitignr -n <template-name>
```

### Examples

Generate a `.gitignore` file for Node.js:
```bash
gitignr -n Node
```

Generate a `.gitignore` file for Python:
```bash
gitignr -n Python
```

Generate a `.gitignore` file for Visual Studio:
```bash
gitignr -n VisualStudio
```

Generate a `.gitignore` file for Java:
```bash
gitignr -n Java
```

The command will create a `.gitignore` file in your current directory with the appropriate rules for the specified technology.

## Available Templates

This tool includes 296+ templates covering languages, frameworks, IDEs, and operating systems. Popular templates include:

### Languages
- C, C++, C#, Java, Python, JavaScript, TypeScript, Go, Rust, Ruby, PHP, Swift, Kotlin, Scala

### Frameworks
- Node, React, Angular, Vue, Django, Flask, Rails, Laravel, Spring

### IDEs & Editors
- VisualStudio, VisualStudioCode, IntelliJ, Eclipse, Xcode, Vim, Emacs

### Platforms
- Android, iOS, Unity, WordPress, Drupal

### Build Tools
- Maven, Gradle, CMake, Autotools

To see all available templates, browse the `gitignore/` directory or visit the [GitHub gitignore repository](https://github.com/github/gitignore).

## Options

| Option | Alias | Description | Required |
|--------|-------|-------------|----------|
| `--name` | `-n` | Name of the gitignore template to use | Yes |

## Error Handling

The tool provides helpful error messages:

- **Template not found**: If you specify a template that doesn't exist, you'll see an error with the attempted path
- **File write errors**: If there's an issue writing the `.gitignore` file, you'll be notified
- **Success confirmation**: When successful, you'll see a confirmation message

### Example Error

```bash
$ gitignr -n InvalidTemplate
Error: Template 'InvalidTemplate' not found.
Template path: /path/to/gitignr/gitignore/InvalidTemplate.gitignore

Available templates can be found in the gitignore/ directory.
```

## Troubleshooting

### Template Name Not Found

Template names are case-sensitive. Make sure you're using the correct capitalization. You can check available templates in the `gitignore/` directory.

### Permission Denied

If you get a permission error when creating the `.gitignore` file, ensure you have write permissions in the current directory.

## Development

### Clone the Repository

```bash
git clone https://github.com/thechandanbhagat/gitignr.git
cd gitignr
```

### Install Dependencies

```bash
npm install
```

### Initialize Submodules

The gitignore templates are maintained as a git submodule:

```bash
git submodule update --init --recursive
```

### Test Locally

```bash
node index.js -n Node
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

- Gitignore templates are maintained by GitHub: https://github.com/github/gitignore
- Original author: Chandan Gupta Bhagat

## License

ISC

## Links

- **Repository**: https://github.com/thechandanbhagat/gitignr
- **Issues**: https://github.com/thechandanbhagat/gitignr/issues
- **NPM Package**: https://www.npmjs.com/package/gitignr