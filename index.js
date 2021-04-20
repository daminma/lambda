exports.handler = async (event) => {
    const response = {
           statusCode: 200,
           body: JSON.stringify('Hello again rom dma from Lambda and Github!'),
    };
    return response;
};
