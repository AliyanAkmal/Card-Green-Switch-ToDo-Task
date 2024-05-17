import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Text,
  Heading,
  Stack,
  Image,
  Box,
  useToast,
} from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@chakra-ui/react";
export default function BuyCard() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  });
  ///////////////////////////
  const handleClickCartADD = () => {
    toast({
      position: "bottom-right",
      render: () => (
        <Box color="white" p={3} bg="mediumseagreen">
          Item Added
        </Box>
      ),
    });
  };
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Card maxW="sm">
        <CardBody>
          <Skeleton isLoaded={loading}>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </Skeleton>
          <Stack mt="6" spacing="3">
            <SkeletonText isLoaded={loading} noOfLines={1} width="10vw">
              <Heading size="md">Living room Sofa</Heading>
            </SkeletonText>
            <SkeletonText isLoaded={loading} noOfLines={4}>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </SkeletonText>
            <SkeletonText
              isLoaded={loading}
              skeletonHeight="10"
              noOfLines={1}
              width="65px"
            >
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </SkeletonText>
          </Stack>
        </CardBody>
        <SkeletonText isLoaded={loading} noOfLines={1}>
          <Divider />
        </SkeletonText>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Skeleton isLoaded={loading}>
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
            </Skeleton>

            <Skeleton isLoaded={loading}>
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={handleClickCartADD}
              >
                Add to cart
              </Button>
            </Skeleton>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}
