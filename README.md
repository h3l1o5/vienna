# Vienna

## Development

Prerequisites:

- macOS with Xcode and an iOS Simulator
- [CocoaPods](https://cocoapods.org)
- Node.js 24 (see `.node-version`)
- pnpm 12, for example through Corepack (`corepack enable`)

Install dependencies:

```sh
pnpm install
```

Build the development app and run it on the iOS Simulator:

```sh
pnpm ios
```

The first run generates `apps/mobile/ios` and builds it with Xcode. Later runs rebuild incrementally. Pass `--device <name or UDID>` to choose a simulator, for example `pnpm ios --device "iPhone 18 Pro"`.

Check types:

```sh
pnpm typecheck
```
