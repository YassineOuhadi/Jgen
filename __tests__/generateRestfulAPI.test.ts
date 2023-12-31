// __tests__/generateRestfulAPI.test.ts
import { join } from 'path'; // Import the 'join' function from the 'path' module
import { generateRestfulAPIAction, GenerateOptions } from '../src/cli/index';

describe('generateRestfulAPIAction', () => {
  it('should generate Restful API code successfully', async () => {
    // Use '__dirname' to get the directory of the current module (this test file)
    const rootDir = join(__dirname, '..'); // Assuming the project structure, adjust as needed
    const fileName = join(rootDir, 'example', 'test.jgen'); // Provide a valid relative file path
    const options: GenerateOptions = { path: join(rootDir, '/example/test.jgen'), destination: join(rootDir, 'generated') }; // Provide a valid relative destination

    // Use try-catch to handle any potential errors during the test
    try {
      await generateRestfulAPIAction(options);
    } catch (error) {
      // Replace fail(error) with an appropriate Jest assertion function
      expect(error).toBeFalsy(); // This is just an example, replace with your actual assertion
    }

  });
});
