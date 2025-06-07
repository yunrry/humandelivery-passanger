import * as React from "react";
import {StyleSheet, Text, View, Image, ImageBackground} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";

const ToDo: React.FC = () => {
  return (
	<ScrollView>
    <SafeAreaView style={styles.mainContent}>
      <View style={styles.travelDepartureArrivalCells}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={styles.frame1}>
            <View style={[styles.departure, styles.arrivalSpaceBlock]}>
              <View style={[styles.textFieldWithIconAtom, styles.withSpaceBlock]}>
                <Image style={styles.pinIcon} resizeMode="cover" source={require('../assets/pin.png')} />
                <Text style={styles.pickupLocation} numberOfLines={1}>Pickup Location</Text>
              </View>
            </View>
            <View style={[styles.arrival, styles.dateSpaceBlock]}>
              <View style={[styles.textFieldWithIconAtom, styles.withSpaceBlock]}>
                <Image style={styles.pinIcon} resizeMode="cover" source={require('../assets/pin.png')} />
                <Text style={styles.pickupLocation} numberOfLines={1}>Drop-off Location</Text>
              </View>
            </View>
          </View>
          <View style={[styles.roundButton, styles.frameIconLayout]}>
            <Image style={[styles.sortIcon, styles.iconLayout]} resizeMode="cover" source={require('../assets/sort.png')} />
            <View style={[styles.highlightBorder, styles.highlightBorder2]} />
          </View>
        </View>
        <View style={styles.frame2}>
          <View style={[styles.startDate, styles.dateSpaceBlock]}>
            <View style={[styles.textFieldWithIconAtom, styles.withSpaceBlock]}>
              <Image style={styles.pinIcon} resizeMode="cover" source={require('../assets/calendar.png')} />
              <Text style={styles.pickupLocation} numberOfLines={1}>Pickup Date</Text>
            </View>
          </View>
          <View style={[styles.endDate, styles.dateSpaceBlock]}>
            <View style={[styles.textFieldWithIconAtom, styles.withSpaceBlock]}>
              <Image style={styles.pinIcon} resizeMode="cover" source={require('../assets/calendar.png')} />
              <Text style={styles.pickupLocation} numberOfLines={1}>Drop-off Date</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.immersiveMapWithRouteInput}>
        <View style={[styles.immersiveMap, styles.frame10FlexBox]}>
          <View style={[styles.mapAtom, styles.mapAtomPosition]}>
            <ImageBackground style={styles.mapIcon} resizeMode="cover" source={require('../assets/map.png')}>
              <View style={styles.image1} />
              <View style={[styles.frame3, styles.framePosition]} />
              <View style={[styles.frame3, styles.framePosition]} />
              <View style={[styles.frame5, styles.framePosition]} />
            </ImageBackground>
            <ImageBackground style={styles.mapIcon} resizeMode="cover" source={require('../assets/map.png')}>
              <View style={styles.image1} />
              <View style={[styles.frame3, styles.framePosition]} />
              <View style={[styles.frame3, styles.framePosition]} />
              <View style={[styles.frame5, styles.framePosition]} />
            </ImageBackground>
          </View>
          <Image style={[styles.routeIcon, styles.iconPosition]} resizeMode="cover" source={require('../assets/route.png')} />
          <View style={[styles.roundButton1, styles.roundLayout]}>
            <Image style={[styles.pinAltIcon, styles.iconLayout]} resizeMode="cover" source={require('../assets/pin-alt.png')} />
            <View style={[styles.highlightBorder1, styles.highlightBorder2]} />
          </View>
          <Image style={[styles.mapMarkersIcon, styles.iconPosition]} resizeMode="cover" source={require('../assets/mapmarkers.png')} />
        </View>
        <View style={styles.routeInputsForMaps}>
          <View style={[styles.frame9, styles.frameBorder]}>
            <View style={[styles.frame10, styles.frame10SpaceBlock]}>
              <View style={[styles.frame11, styles.frameFlexBox]}>
                <View style={[styles.transportationmode, styles.roundButton1Clr]}>
                  <Image style={styles.pinIcon} resizeMode="cover" source={require('../assets/car.png')} />
                  <Text style={[styles.car, styles.carTypo]}>Car</Text>
                </View>
                <View style={[styles.transportationmode, styles.roundButton1Clr]}>
                  <Image style={styles.pinIcon} resizeMode="cover" source={require('../assets/clock.png')} />
                  <Text style={[styles.car, styles.carTypo]}>Leave now</Text>
                </View>
              </View>
			  <Image style={styles.roundLayout} resizeMode="cover" source={require('../assets/round-button.png')} />
            </View>
            <View style={[styles.mapsDepartureAndArrivalCel, styles.frame10SpaceBlock]}>
              <View style={styles.frame12}>
                <Image style={styles.frameIconLayout} resizeMode="cover" source={require('../assets/route-start.png')} />
                <View style={styles.frame13}>
                  <Text style={styles.yourLocation}>Your location</Text>
                  <View style={[styles.frame14, styles.frameFlexBox]}>
                    <Text style={styles.currentLocation} numberOfLines={1}>Current Location</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frame12}>
                <Image style={styles.frameIconLayout} resizeMode="cover" source={require('../assets/route-end.png')} />
                <View style={styles.frame13}>
                  <Text style={styles.yourLocation}>Routing to</Text>
                  <View style={[styles.frame14, styles.frameFlexBox]}>
                    <Text style={styles.currentLocation} numberOfLines={1}>Destination</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.frame18, styles.frameFlexBox]}>
            <View style={[styles.labelsChevron, styles.frameFlexBox]}>
              <View style={styles.frame1}>
                <View style={[styles.tripLength, styles.frameFlexBox]}>
                  <Text style={styles.mins} numberOfLines={1}>30 mins</Text>
                  <View style={styles.frameFlexBox}>
                    <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>(</Text>
                    <Text style={styles.textTypo}>15 miles</Text>
                    <Text style={styles.textTypo}>)</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.buttonSmallSecondaryWithIc, styles.buttonFlexBox]}>
              <Image style={styles.locationFillIcon} resizeMode="cover" source={require('../assets/location-fill.png')} />
              <Text style={[styles.car, styles.carTypo]}>Start</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.singleButtonPrimaryLarge, styles.mapAtomPosition]}>
        <View style={[styles.buttonLargePrimary, styles.buttonFlexBox]}>
          <Text style={[styles.callTaxi, styles.carTypo]} numberOfLines={1}>Call Taxi</Text>
        </View>
      </View>
    </SafeAreaView>
	</ScrollView>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row"
  },
  arrivalSpaceBlock: {
    paddingRight: 8,
    paddingLeft: 16,
    alignSelf: "stretch"
  },
  withSpaceBlock: {
    paddingVertical: 14,
    gap: 8
  },
  dateSpaceBlock: {
    paddingBottom: 8,
    backgroundColor: "#fffcfa"
  },
  frameIconLayout: {
    borderRadius: 360
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  highlightBorder2: {
    display: "none",
    borderWidth: 3,
    borderStyle: "solid",
    position: "absolute",
    borderRadius: 360
  },
  frame10FlexBox: {
    gap: 0,
    justifyContent: "space-between"
  },
  mapAtomPosition: {
    zIndex: 0,
    alignSelf: "stretch"
  },
  framePosition: {
    right: -1,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden"
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    position: "absolute"
  },
  roundLayout: {
    height: 32,
    width: 32,
    borderRadius: 360
  },
  frameBorder: {
    borderColor: "rgba(110, 92, 73, 0.2)",
    borderStyle: "solid"
  },
  frame10SpaceBlock: {
    padding: 8,
    alignSelf: "stretch"
  },
  roundButton1Clr: {
    backgroundColor: "#fffdfc",
    borderColor: "rgba(110, 92, 73, 0.2)",
    borderStyle: "solid"
  },
  carTypo: {
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    color: "#28211b"
  },
  textTypo: {
    fontSize: 20,
    letterSpacing: -0.4,
    color: "rgba(46, 33, 20, 0.62)",
    textAlign: "left",
    fontFamily: "Inter-Regular"
  },
  buttonFlexBox: {
    backgroundColor: "#ff9429",
    borderRadius: 48,
    justifyContent: "center",
    paddingHorizontal: 16,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row"
  },
  pinIcon: {
    overflow: "hidden"
  },
  pickupLocation: {
    textAlign: "left",
    color: "#28211b",
    fontFamily: "Inter-Regular",
    lineHeight: 23,
    fontSize: 17,
    overflow: "hidden",
    flex: 1
  },
  textFieldWithIconAtom: {
    paddingHorizontal: 13,
    gap: 8,
    backgroundColor: "rgba(126, 82, 37, 0.09)",
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch"
  },
  departure: {
    paddingBottom: 4,
    paddingTop: 8,
    backgroundColor: "#fffcfa"
  },
  arrival: {
    paddingTop: 4,
    paddingRight: 8,
    paddingLeft: 16,
    alignSelf: "stretch"
  },
  frame1: {
    flex: 1
  },
  sortIcon: {
    height: "54.55%",
    width: "54.55%",
    top: "22.73%",
    right: "22.73%",
    bottom: "22.73%",
    left: "22.73%"
  },
  highlightBorder: {
    height: "127.27%",
    width: "127.27%",
    top: "-13.64%",
    right: "-13.64%",
    bottom: "-13.64%",
    left: "-13.64%",
    borderColor: "#ff9429"
  },
  roundButton: {
    backgroundColor: "rgba(126, 82, 37, 0.09)"
  },
  frame: {
    paddingRight: 16,
    backgroundColor: "#fffcfa",
    alignSelf: "stretch"
  },
  startDate: {
    paddingRight: 4,
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    flex: 1
  },
  endDate: {
    paddingLeft: 4,
    paddingTop: 8,
    paddingRight: 16,
    flex: 1
  },
  frame2: {
    flexDirection: "row",
    alignSelf: "stretch"
  },
  travelDepartureArrivalCells: {
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 16,
    zIndex: 2,
    backgroundColor: "#fffcfa",
    alignSelf: "stretch"
  },
  image1: {
    top: -15,
    right: -203,
    bottom: -15,
    left: -204,
    position: "absolute"
  },
  frame3: {
    opacity: 0.5,
    backgroundColor: "#fffcfa"
  },
  frame5: {
    backgroundColor: "rgba(163, 82, 0, 0.16)"
  },
  mapIcon: {
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden"
  },
  mapAtom: {
    borderWidth: 1,
    borderColor: "rgba(110, 92, 73, 0.2)",
    borderStyle: "solid",
    overflow: "hidden",
    borderRadius: 16,
    flex: 1
  },
  routeIcon: {
    marginTop: -51.46,
    marginLeft: -104.5,
    borderRadius: 8,
    zIndex: 1
  },
  pinAltIcon: {
    height: "62.5%",
    width: "62.5%",
    top: "18.75%",
    right: "18.75%",
    bottom: "18.75%",
    left: "18.75%"
  },
  highlightBorder1: {
    height: "137.5%",
    width: "137.5%",
    top: "-18.75%",
    right: "-18.75%",
    bottom: "-18.75%",
    left: "-18.75%",
    borderColor: "#894400"
  },
  roundButton1: {
    marginTop: 42,
    marginLeft: -122.5,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowRadius: 32,
    elevation: 32,
    shadowOpacity: 1,
    backgroundColor: "#fffdfc",
    borderColor: "rgba(110, 92, 73, 0.2)",
    borderStyle: "solid",
    left: "50%",
    top: "50%",
    position: "absolute",
    borderWidth: 1,
    zIndex: 2
  },
  mapMarkersIcon: {
    marginTop: -67,
    marginLeft: 52.5,
    zIndex: 3
  },
  immersiveMap: {
    height: 498,
    padding: 16,
    overflow: "hidden",
    backgroundColor: "#fffcfa",
    alignSelf: "stretch"
  },
  car: {
    lineHeight: 20,
    fontSize: 15,
    textAlign: "center"
  },
  transportationmode: {
    borderRadius: 24,
    borderWidth: 0.5,
    paddingVertical: 9,
    minHeight: 28,
    gap: 4,
    justifyContent: "center",
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row"
  },
  frame11: {
    gap: 10
  },
  frame10: {
    borderBottomWidth: 1,
    borderColor: "rgba(110, 92, 73, 0.2)",
    borderStyle: "solid",
    gap: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  yourLocation: {
    fontSize: 13,
    color: "rgba(46, 33, 20, 0.62)",
    textAlign: "left",
    fontFamily: "Inter-Regular"
  },
  currentLocation: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 15,
    textAlign: "left",
    color: "#28211b",
    overflow: "hidden",
    flex: 1
  },
  frame14: {
    alignSelf: "stretch"
  },
  frame13: {
    gap: 4,
    justifyContent: "center",
    flex: 1
  },
  frame12: {
    paddingLeft: 8,
    borderRadius: 48,
    paddingBottom: 8,
    gap: 8,
    backgroundColor: "rgba(126, 82, 37, 0.09)",
    paddingTop: 8,
    paddingRight: 16,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch"
  },
  mapsDepartureAndArrivalCel: {
    justifyContent: "center",
    gap: 8
  },
  frame9: {
    borderWidth: 1,
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#fffcfa",
    alignSelf: "stretch"
  },
  mins: {
    fontSize: 18,
    letterSpacing: -0.4,
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    textAlign: "left",
    color: "#28211b",
    overflow: "hidden"
  },
  text: {
    overflow: "hidden"
  },
  tripLength: {
    gap: 4,
    alignSelf: "stretch"
  },
  labelsChevron: {
    flex: 1
  },
  locationFillIcon: {},
  buttonSmallSecondaryWithIc: {
    height: 40,
    gap: 8,
    paddingVertical: 14
  },
  frame18: {
    justifyContent: "center",
    padding: 16,
    backgroundColor: "rgba(126, 82, 37, 0.09)",
    borderRadius: 16,
    alignSelf: "stretch"
  },
  routeInputsForMaps: {
    paddingBottom: 16,
    gap: 10,
    paddingHorizontal: 16,
    alignSelf: "stretch"
  },
  immersiveMapWithRouteInput: {
    zIndex: 1,
    overflow: "hidden",
    backgroundColor: "#fffcfa",
    alignSelf: "stretch"
  },
  callTaxi: {
    textAlign: "center",
    lineHeight: 23,
    fontSize: 17,
    overflow: "hidden",
    flex: 1
  },
  buttonLargePrimary: {
    height: 50,
    paddingVertical: 15,
    flex: 1
  },
  singleButtonPrimaryLarge: {
    padding: 16,
    flexDirection: "row",
    backgroundColor: "#fffcfa"
  },
  mainContent: {
    width: "100%",
    minHeight: 1098,
    flex: 1,
    alignSelf: "stretch"
  }
});

export default ToDo;
