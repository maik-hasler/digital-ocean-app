import "./index.css";

function Footer() {
    return (
        <footer className="flex-column flex-gap-m">
            <div className="flex-column flex-gap-l">
                <div id="thanksgiving" className="flex-column flex-gap-s">
                    <h1>Thank you.</h1>
                    <p>This is a paragraph filled with a placeholder text, because I am too lazy to write one. Anyways I want to thank you that you read this absolutly irrelevant paragraph. Much love to you.</p>
                </div>
                <div className="flex-row flex-gap-xl">
                    <ul>
                        <li>Heading</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                    </ul>
                    <ul>
                        <li>Heading</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                    </ul>
                    <ul>
                        <li>Heading</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                    </ul>
                    <ul>
                        <li>Heading</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                        <li>Sample item</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div>
                <span>Copyright &copy; 2021 BRAND_HERE. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;