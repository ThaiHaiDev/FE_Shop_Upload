import { Box, Typography } from "@mui/material";

export default function ProductItem({ props }) {
    return (
        <Box padding={1}>
            <Box padding={1} minHeight="129px">
                <img src={props.name ? "https://i2.wp.com/planx.co.il/wp-content/uploads/2011/05/400x400.png?fit=400%2C400&ssl=1" : "https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-1-800x450.jpg" } alt={props.name} width="100%" />
            </Box>
            <Typography variant="body2">{props.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(props.salePrice)}
                </Box>
                {props.promotionPercent > 0 ? ` - ${props.promotionPercent}%` : ''}
            </Typography>
        </Box>
    )
}