#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Reactables...\n');

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully\n');
  } catch (error) {
    console.error('❌ Failed to install dependencies');
    process.exit(1);
  }
}

// Test TypeScript compilation
console.log('🔍 Checking TypeScript compilation...');
try {
  execSync('npm run type-check', { stdio: 'inherit' });
  console.log('✅ TypeScript compilation successful\n');
} catch (error) {
  console.error('❌ TypeScript compilation failed');
  process.exit(1);
}

// Test build
console.log('🏗️  Testing build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful\n');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Test linting
console.log('🔍 Running linter...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('✅ Linting passed\n');
} catch (error) {
  console.error('❌ Linting failed');
  process.exit(1);
}

console.log('🎉 Reactables setup complete!');
console.log('\n📚 Available commands:');
console.log('  npm run dev          - Build in watch mode');
console.log('  npm run storybook    - Start Storybook');
console.log('  npm run test         - Run tests');
console.log('  npm run build        - Build the library');
console.log('  npm run lint         - Run linter');
console.log('\n🚀 Ready to develop!'); 