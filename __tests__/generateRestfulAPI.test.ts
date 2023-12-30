// __tests__/generateRestfulAPI.test.ts
import { join } from 'path';
import { generateRestfulAPIAction, GenerateOptions } from '../src/cli/index';

describe('generateRestfulAPIAction', () => {
  it('should generate Restful API code successfully', async () => {
    const rootDir = join(__dirname, '..');
    const fileName = join(rootDir, 'example', 'test.jgen');
    const options: GenerateOptions = { destination: join(rootDir, 'generated') };

    try {
      // Perform the action you want to test
      await generateRestfulAPIAction(fileName, options);

      // Add assertions using expect
      // For example, you might want to assert that the generated files exist
      // Replace this with actual assertions based on your requirements
      // expect(/* Some condition */).toBe(/* Expected value */);
    } catch (error) {
      // If an error occurs during the action, fail the test
      fail(error);
    }
  });
});
