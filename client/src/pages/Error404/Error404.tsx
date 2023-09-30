
import { Page } from "../../components";

function Error404(){
    return (
        <Page>
            <div className = "404-not-found">
                <h1 className = "404-not-found">404: Not Found</h1>
                <iframe src="https://giphy.com/embed/lkcIQY7IuctvFCGAD3" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bunny-corgi-lazy-lkcIQY7IuctvFCGAD3">via GIPHY</a></p>
            </div>
        </Page>
    );
};

export default Error404;