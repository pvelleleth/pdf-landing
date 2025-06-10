export interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: string;
  readTime: string;
  category: string;
  image?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-with-curatepdf',
    title: 'Getting Started with CuratePDF: From Zero to Your First PDF',
    description: 'Complete beginner\'s guide to creating professional PDFs with CuratePDF\'s drag-and-drop editor and dynamic templates.',
    pubDate: '2025-06-09',
    readTime: '2 min read',
    category: 'Tutorial',
    image: '/landingpic.png',
    content: `# Getting Started with CuratePDF: From Zero to Your First PDF

Welcome to **CuratePDF**, the most intuitive way to create professional PDFs with a drag-and-drop editor and powerful automation capabilities.

## Why CuratePDF is Different

Unlike traditional PDF tools that require complex HTML/CSS knowledge, CuratePDF combines:
- **Visual drag-and-drop editor** for designers
- **JSON-based templates** for developers  
- **Dynamic field support** for automation
- **AI-assisted template generation** from existing documents

## Step 1: Create Your Account

Visit [app.curatepdf.com/signup](https://app.curatepdf.com/signup) to create your free account. Once verified, you'll access the dashboard where all the magic happens.

## Step 2: Choose Your Starting Point

### Option A: Start from Scratch
1. Click **New Template** in your dashboard
3. Use the drag-and-drop editor to add elements

### Option B: AI Template Generation (Recommended)
1. Upload an existing PDF or image of your desired layout
2. CuratePDF's AI will automatically generate a drag-and-drop template
3. Fine-tune the generated template to match your needs perfectly

## Step 3: Design Your Template

### Adding Elements
- **Text blocks**: For static content and headings
- **Dynamic fields**: Use {{variable_name}} for data that changes
- **Images**: Upload logos, signatures, or decorative elements
- **Shapes**: Lines, rectangles, and borders for structure
- **Tables**: Create structured data layouts with customizable columns and rows. Choose between static or dynamic tables.
- **Charts**: Add visual data representations like bar, line, and pie charts

### Pro Tips for Better Design
- Use consistent fonts (2-3 maximum)
- Maintain proper spacing with alignment guides
- Preview frequently to see real-time changes
- Save templates for reuse across projects

## Step 4: Test with Real Data

Before going live, test your template:
1. Click **Preview** to see how it renders
2. Use sample data to fill dynamic fields
3. Check alignment and spacing
4. Generate a test PDF to verify everything looks perfect

## Step 5: Automate with the API

Once your template is ready, integrate it into your workflow:

\`\`\`javascript
const response = await fetch('https://api.curatepdf.com/api/generate-pdf', {
  method: 'POST',
  headers: {
    'x-api-key': 'YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    template_id: 'your-template-id',
    data: {
      customer_name: 'John Doe',
      invoice_number: 'INV-001',
      amount: '$1,250.00'
    }
  })
});
\`\`\`

### No-Code Automation Platforms

Don't want to write code? No problem! CuratePDF integrates seamlessly with popular automation platforms:

**Zapier**: Connect CuratePDF to 5,000+ apps without coding. Trigger PDF generation from form submissions, new CRM entries, or scheduled events.

**Make.com**: Build visual workflows that generate PDFs when specific conditions are met. Perfect for complex multi-step automations.

**n8n**: Open-source automation that gives you full control. Self-host or use their cloud service to create custom PDF generation workflows.

**Common No-Code Workflows:**
- New Stripe payment → Generate invoice PDF → Email to customer
- Google Form submission → Create certificate PDF → Save to Google Drive
- New Airtable record → Generate report PDF → Send to Slack

## Common First Projects

**Invoices**: Perfect for learning dynamic fields and branding
**Certificates**: Great for practicing layout and typography
**Reports**: Excellent for understanding data integration

Ready to create your first professional PDF? Start for free today!`
  }
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
} 